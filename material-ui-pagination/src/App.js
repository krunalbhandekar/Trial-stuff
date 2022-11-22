import  React,{useState} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function App() {
  const [page, setpage] = useState(1)


  const pageChangeHandler=(event, pageNumber = 1)=>{
    setpage(pageNumber);
  }
  

  return (
    <>
    <h1>page: {page}</h1>
     <Stack spacing={2}>
      <Pagination count={20} shape="rounded" 
      page={page} 
       onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)}/>
    </Stack>
    </>
  );
}

export default App;
