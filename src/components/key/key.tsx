

export function Key({value}: {value: string}) {
  return (
    <button className={value === 'delete' ? 'key big' : 'key'} value={value}>{value}</button>
  );
}

export default Key;
