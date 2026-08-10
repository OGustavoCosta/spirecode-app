'use client'

import { useEffect, useId, useRef, useState } from "react"
import type { KeyboardEvent as ReactKeyboardEvent } from "react"

import { ChevronDown } from "lucide-react"

export type SelectOption = {
  value: string
  label: string
}

type Props = {
  name: string
  label: string
  options: SelectOption[]
  className?: string
}

function Select({ name, label, options, className = '' }: Props){
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<SelectOption | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const listId = useId()
  const labelId = useId()
  const valueId = useId()

  /* fecha ao clicar fora */
  useEffect(() => {
    if (!isOpen) return

    function handlePointerDown(event: PointerEvent){
      if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [isOpen])

  /* mantém a opção ativa dentro da área visível do pop-up */
  useEffect(() => {
    if (!isOpen) return
    listRef.current?.children[activeIndex]?.scrollIntoView({ block: 'nearest' })
  }, [isOpen, activeIndex])

  function open(){
    const index = selected ? options.findIndex((option) => option.value === selected.value) : 0
    setActiveIndex(Math.max(index, 0))
    setIsOpen(true)
  }

  function choose(index: number){
    setSelected(options[index])
    setIsOpen(false)
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>){
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        if (isOpen) setActiveIndex((index) => Math.min(index + 1, options.length - 1))
        else open()
        break

      case 'ArrowUp':
        event.preventDefault()
        if (isOpen) setActiveIndex((index) => Math.max(index - 1, 0))
        else open()
        break

      case 'Home':
        if (!isOpen) break
        event.preventDefault()
        setActiveIndex(0)
        break

      case 'End':
        if (!isOpen) break
        event.preventDefault()
        setActiveIndex(options.length - 1)
        break

      case 'Enter':
      case ' ':
        /* preventDefault evita que o Enter envie o formulário */
        event.preventDefault()
        if (isOpen) choose(activeIndex)
        else open()
        break

      case 'Escape':
      case 'Tab':
        setIsOpen(false)
        break
    }
  }

  /* o rótulo sobe quando o pop-up abre ou quando já existe uma escolha */
  const isFloating = isOpen || selected !== null

  return(
    <div ref={wrapperRef} className={`select relative flex flex-col pt-4 ${className}`}>
      <span id={labelId} className={`select__label absolute left-0 font-medium transition-all duration-200 ease-out ${isFloating ? 'top-0 text-[0.7rem]' : 'top-7'}`}>
        {label}
      </span>

      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-labelledby={`${labelId} ${valueId}`}
        aria-activedescendant={isOpen ? `${listId}-${activeIndex}` : undefined}
        onClick={() => (isOpen ? setIsOpen(false) : open())}
        onKeyDown={handleKeyDown}
        className="select__trigger flex items-center justify-between gap-2 border-b border-ds-pine/50 py-3 text-left text-sm text-ds-neutral-400 cursor-pointer focus:outline-none focus-visible:border-ds-pine"
      >
        {/* sem escolha, um nbsp segura a linha de texto e mantém a altura do gatilho */}
        <span id={valueId} className="select__value truncate">{selected?.label ?? ' '}</span>
        <ChevronDown size={16} aria-hidden="true" className={`select__chevron shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}/>
      </button>

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-label={label}
        className={`select__popup absolute top-full left-0 z-10 mt-2 w-full max-h-56 overflow-y-auto rounded-xl bg-ds-off-white p-1 ring-1 ring-ds-pine/10 shadow-lg shadow-ds-pine/10 transition-all transition-discrete duration-200 ease-out ${isOpen ? 'block opacity-100 translate-y-0 starting:opacity-0 starting:-translate-y-1' : 'hidden opacity-0 -translate-y-1'}`}
      >
        {options.map((option, index) => (
          <li
            key={option.value}
            id={`${listId}-${index}`}
            role="option"
            aria-selected={selected?.value === option.value}
            onPointerDown={(event) => event.preventDefault()}
            onClick={() => choose(index)}
            onMouseEnter={() => setActiveIndex(index)}
            className={`select__option cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors ${index === activeIndex ? 'bg-ds-pine text-ds-off-white' : 'text-ds-pine'}`}
          >
            {option.label}
          </li>
        ))}
      </ul>

      {/* leva o valor escolhido no envio do formulário */}
      <input type="hidden" name={name} value={selected?.value ?? ''}/>
    </div>
  )
}

export default Select
