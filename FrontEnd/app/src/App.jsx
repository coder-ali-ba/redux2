import Typography from "@mui/material/Typography";
import { useForm, Controller } from "react-hook-form";
import "./App.css";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import API from "./utility";
import { addProfile } from "./REDUX/profileSlice";

function App() {
  const { control, register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.profiles);

  const handelImageUpload = async (e) => {
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await API.post("/upload/image", formData);

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const onSubmit = (data) => {
    console.log(data);
    dispatch(addProfile(data))
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[300px] m-auto gap-4 text-center pt-7"
      >
        <Controller
          name="ProfileName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Name"
              className=""
              variant="outlined"
            />
          )}
        ></Controller>
        <Controller
          name="profileNo"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} placeholder="Number" variant="outlined" />
          )}
        ></Controller>
        <Controller
          name="profileClass"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} placeholder="Class" variant="outlined" />
          )}
        ></Controller>
        <label htmlFor="imageFile">
          <CloudQueueIcon className="text-pink-400" />
          <div className="text-gray-600">Upload Photo</div>
          <input
            type="file"
            id="imageFile"
            className="hidden"
            onChange={(e) => handelImageUpload(e)}
          />
        </label>
        <Button type="submit" variant="contained">
          ADD
        </Button>
      </form>


      <div>
        {profiles.map((profile)=>{
          return (
            <div key={profile.profileName}>
              <h5>{profile.profileName}</h5>
              <Typography>{profile.profileNo}</Typography>
              <Typography>{profile.profileClass}</Typography>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
