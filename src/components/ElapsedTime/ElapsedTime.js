function ElapsedTime({ time }) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  );
}


export default ElapsedTime