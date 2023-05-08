// function Script() {

//         // const [usedata,setdata]=useState([]);

//       //     let API_KEY='FqVMGebD9w8w7AtwbuPeq9ODzUXXivK4OHKvyBwu'
//       const setdata=[];

//       const res=[];
//       axios.get(`https://api.nasa.gov/planetary/apod?api_key=FqVMGebD9w8w7AtwbuPeq9ODzUXXivK4OHKvyBwu`)
//         .then((res)=>{
//             console.log(res)
//           document.write();  
//         }) 
       
     
//     }



async function sendapirequest()
{
  let reponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=FqVMGebD9w8w7AtwbuPeq9ODzUXXivK4OHKvyBwu`);
  console.log("responed"+reponse);
  let data = await reponse.json()
  console.log(data);
  useapidata(data);
} 
function useapidata(data)
{
  arr = document.getElementById("date").innerHTML= data.date;
  arr = document.getElementById("imagecontent").innerHTML= `<img src= ${data.url} />`
  arr = document.getElementById("explanation").innerHTML =data.explanation;

}