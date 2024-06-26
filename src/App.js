import axios from'axios';


function App() {


  const handleData = async () =>{

    console.log(" using get http method for checking cors of server ");
    
    try {
      

      const res2 =   await axios.get("https://cros-test-backend.onrender.com/login");
        console.log(res2.data)

      const res3 =   await axios.post("https://cros-test-backend.onrender.com/login");
        console.log(res3.data)

      const res1 =   await axios.put("https://cros-test-backend.onrender.com/login");
        console.log(res1.data)

      const res4 =   await axios.delete("https://cros-test-backend.onrender.com/login");
        console.log(res4.data)
        
    }
    catch(error){
        console.log("Error get http : ",error);
        return null;
    }



  }

  return (
    <div className="App">
      <h1>THIS IS CORS TEST FOR WEB SERVERS</h1>
      <button onClick={handleData}>get data from server</button>
    </div>
  );
}

export default App;
