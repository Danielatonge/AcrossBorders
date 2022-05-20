import className from 'classnames';

type IInputProps = {
  xl?: boolean;
  onChange: (text: string) => {};
};

const Input = (props: IInputProps) => {
  const btnClass = className({
    input: true,
    'input-xl': props.xl,
    'input-base': !props.xl,
    'input-primary': true,
  });

  return (
    <>
      <input
        className={btnClass}
        placeholder="Enter Email"
        type="email"
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
      <style jsx>
        {`
          .input {
            @apply inline-block rounded-md text-left mr-4;
          }

          .input-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .input-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }
        `}
      </style>
    </>
  );
};

export { Input };
