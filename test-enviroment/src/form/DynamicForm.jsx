import { useForm, useFieldArray } from 'react-hook-form';

function DynamicForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      items: [{ name: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Dynamic Input Form</h2>

      {fields.map((field, index) => (
        <div key={field.id} style={{ marginBottom: '10px' }}>
          <input
            {...register(`items.${index}.name`)}
            placeholder={`Item ${index + 1}`}
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ name: '' })}
        style={{ marginTop: '10px' }}
      >
        Add Item
      </button>

      <button type="submit" style={{ marginTop: '20px' }}>
        Submit
      </button>
    </form>
  );
}

export default DynamicForm;
