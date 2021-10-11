import Card from './components/Card';
import {useState, useEffect} from 'react'
import axios from 'axios';

var options = {
  method: "GET",
  url: "https://reqres.in/api/users?page=2",
};

function App() {
  const [ users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.request(options);
      console.log(res);
      setUsers(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };

  const renderUsers = ()=>{
    return users.map((u)=>{
      return(
        <div>{u.email}</div>
      )
    })
  }

  return (
    <div style={{margin:"10px auto",maxWidth:"1000px"}}>
      <div>
        <Card header ="About me">
          <p>Hello World</p>
        </Card>
        <div style={styles.columnContainer}>
          <Card header ="About me" flex={1}>
            <p>Hello World</p>
          </Card>
          <Card header ="About me" flex={2}>
            <p>Hello World</p>
          </Card>
          <Card header ="About me" flex={1}>
            <p>Hello World</p>
          </Card>
        </div>
        <Card header="User">{renderUsers()}</Card>
      </div>
    </div>
  );
}

const styles ={
  columnContainer:{
    display:"flex",
    flex:"7",
    justifyContent:"space-between"
  }
}

export default App;
