function App() {
  // function btnclicked(){
  // console.log("Hello ,button is Clicked");
  //}
  // function inputchanging(val){
  //   console.log(val);
  // }

  // function move(ele) {
  //   console.log(ele);
  // }
  function Scroll(ele){
    if(ele > 0){
      console.log('Seedha Scrolling....');
    }
    else{
      console.log('Utla Scrollong...');
    }
  }

  return (
    <div>
      <h1>Hello ,Guys</h1>

      {/* <button onClick={function(){
  console.log('Btn clicked')
}}>Click me</button> */}

      {/* <label >Username  </label>
<input  type="text" placeholder="Enter your name" onChange={function(ele){
  console.log(ele.target.value)
}} /> */}

      {/* <div onMouseMove={function(ele){
  console.log(ele.clientY)
}} className="box"></div> */}


      <div onWheel={function(ele){
        Scroll(ele.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
}

export default App;
