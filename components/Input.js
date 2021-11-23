import Textarea from 'react-textarea-autosize'
import Select from 'react-select'

export default function Input(props) {
  return (
    <div className='m-0'>
    {props.label && <label className='block mt-3 font-sans text-gray-500 tracking-wide text-sm font-medium mb-0.5' htmlFor={props.id}>
      {props.label}
    </label>}
    {props.autosize &&
    <Textarea
    minRows={3}
    className={`w-full text-black text-base sm:w-64 focus:shadow-md border-gray-200 ${props.error && 'border-red-400'} disabled:opacity-50 disabled:cursor-not-allowed hover:border-indigo-400 focus:border-indigo-500 rounded-lg outline-none px-2 py-1 border-2 bg-gray-100`}
    {...props}
    />}
    {props.select &&
    <Select
    value={props.value}
    onChange={props.onChange}
    name={props.name}
    options={props.options}
    id={props.id}
    name={props.name}
    defaultValue={props.defaultValue}
    styles={{
      control: (provided, state) => ({
        ...provided,
        fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        fontSize: '1rem',
        lineHeight: '1.5rem',
        transitionDuration: '150ms',
        borderRadius: '0.5rem',
        borderWidth: '2px',
        ':hover': {
          borderColor: 'rgba(129, 140, 248)',
        },
        backgroundColor: 'rgba(243, 244, 246)',
        border: `2px solid ${state.isFocused ? 'rgba(99, 102, 241) !important' : 'rgba(229, 231, 235)'}`,
        boxShadow: state.isFocused ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)': 'none',
        letterSpacing: '0em'
      }),
      indicatorSeparator: () => ({}),
      valueContainer: (provided, state) => ({
        ...provided,
        margin: '0 0.5rem',
        padding: 0
      }),
      input: (provided) => ({
        ...provided,
        padding: 0,
        margin: 0
      }),
      placeholder: (provided) => ({
        ...provided,
        margin: 0,
        padding: 0,
        color: 'rgba(156, 163, 175)'
      }),
      dropdownIndicator: (_) => ({
        ..._,
        paddingTop: 0,
        paddingBottom: 0
      }),
      indicatorsContainer: (_) => ({
        ..._,
        height: '',
        padding: '0.25rem 0'
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected && '#6366F1 !important',
        color: state.isSelected ? '#E0E7FF !important' : '#000',
        cursor: 'pointer',
        transitionDuration: '150ms',
        borderRadius: '0.25rem',
        ':hover': {
          color: '#6366F1',
        },
        ':active': {
          color: '#6366F1',
        },
        ':first-of-type': {
          borderRadius: '.25rem .25rem 0 0'
        },
        ':last-of-type': {
          borderRadius: '0 0 .25rem .25rem'
        }
      }),
      singleValue: (provided) => ({
        ...provided,
        margin: 0,
        padding: 0,
        fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        fontSize: '1rem',
        lineHeight: '1.5rem',
        letterSpacing: '0em',
      }),
      menuList: () => ({}),
      menu: (_) => ({
        ..._,
        animation: '.25s ease toptodown'
      })
    }}
    />
    }
    {(!props.autosize && !props.select) &&
    <input
    className={`duration-150 text-black text-base w-64 focus:shadow-md border-gray-200 ${props.error && 'border-red-400'} disabled:opacity-50 disabled:cursor-not-allowed hover:border-indigo-400 focus:border-indigo-500 rounded-lg outline-none px-2 py-1 border-2 bg-gray-100`}
    {...props}
    />}
    <label className={`opacity-100 ${!props.error && 'hidden opacity-0'} duration-150 text-xs text-red-500 tracking-wide block`}
    htmlFor={props.id}>
      {props.error}
    </label>
    </div>
  )
}