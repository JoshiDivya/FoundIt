
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useState = makeStyles((theme)=>({
  selectedButton: {
    border: '1px solid black',
    color: 'white',
    backgroundColor : 'black',
    fontSize : '1rem'
  },
  button : {
    border : '1px solid black',
    color : 'black',
    backgroundColor : 'white'
  }
}))


// if(child){
//   if(childImage)
//   <p>childImage</p>
//   else
//   <p>parentImage</p>
// }
// else {
//   <p>Parent image</p>
// }


// {child && childImages ? <p>childImage</p> : <p>ParentImage</p>}


const MySelect=() => {
  return (
    <div style={{ height: "100px", alignContent: "center", margin: "5px" }}>
    <div>
    <Link to="/images">Images</Link>
    <Link  to="/videos">Videos</Link>
    </div>
    </div>
  );
};

export default MySelect;
