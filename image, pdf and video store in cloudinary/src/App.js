
import './App.css';
import { useState } from "react";
function App() {
    const [pic, setPic] = useState();
      const [picLoading, setPicLoading] = useState(false);
      const postDetails=(file)=>{
         setPicLoading(true);
         const data = new FormData();
         data.append("file", file);
          data.append("upload_preset", "chat-app");
          data.append("cloud_name", "dpsectfap");
          
          // file.type==image || pdf then write image in url and if file.type==video then write video in url

                fetch(`https://api.cloudinary.com/v1_1/dpsectfap/image/upload`, {
        method: "post",
        body: data,
      })
       .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data);
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
      }

  return (
    <div className="App">
      <input type="file" onChange={(e) => postDetails(e.target.files[0])}/>
    </div>
  );
}

export default App;
