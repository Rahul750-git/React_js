function Collage({ coursename }) {
  return (
    <>
      <h1>Course List</h1>
      {/* <ul>
        <li>{coursename[0]}</li>
        <li>{coursename[1]}</li>
        <li>{coursename[2]}</li>
        <li>{coursename[3]}</li>
        <li>{coursename[4]}</li>
        <li>{coursename[5]}</li>
        <li>{coursename[6]}</li>
        <li>{coursename[7]}</li>
        <li>{coursename[8]}</li>
        <li>{coursename[9]}</li>
        <li>{coursename[10]}</li>
        <li>{coursename[11]}</li>
      </ul> */}
      <ul>
        {coursename.map((course, i) => (
          <li key={i}>{course}</li>
        ))}
      </ul>
    </>
  );
}
export default Collage;
