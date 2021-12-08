export default function Field({ className, error, label, form, name, ...props }) {
  return (
    <>
    <label className='group w-full relative'>
      {label && <p className='font-bold uppercase text-sm text-white/20 select-none'>{label}</p>}
      <input className={`px-2 py-1 disabled:cursor-not-allowed disabled:opacity-50 rounded w-full bg-gray-700 border-2 border-gray-600 ${form.errors[name] && 'border-red-500'} focus:border-green-500 focus:bg-green-500/10 hover:shadow-md duration-150 text-white outline-none ${className}`}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
      value={form.values[name]}
      disabled={form.isSubmitting}
      name={name}
      {...props}/>
      {form.errors[name] && <p className='right-to-left select-none text-red-100 text-xs bg-red-500 rounded-l absolute right-0 top-2 px-2 py-0.5 max-w-4xl shadow'>{form.errors[name]}</p>}
    </label>
    </>
  )
}