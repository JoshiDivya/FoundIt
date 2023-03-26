import { Button, ButtonGroup } from "@mui/material";




const ButtonVideoImage=({ changeData })=>{

  const changeRenderData=(value)=>{
    changeData(value);
  };

    return <div>
    <Button id='btnImg' onClick={changeRenderData(false)}>Images</Button>
    <Button id='btnVideo' onClick={changeRenderData(true)}>Videos</Button></div>
  
}

export default ButtonVideoImage;