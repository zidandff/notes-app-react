export default function Input({ ref, textarea, className, ...props }) {
  const inputStyles =
    `w-full bg-transparent focus:outline-none p-1 rounded-md ` + className;
  return (
    <>
      {textarea ? (
        <textarea {...props} ref={ref} className={inputStyles}></textarea>
      ) : (
        <input {...props} ref={ref} className={inputStyles} type="text" />
      )}
    </>
  );
}
