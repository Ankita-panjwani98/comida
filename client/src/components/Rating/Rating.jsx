
import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

export default function StarRating(props) {
  const [value, setValue] = React.useState({rating:0});
  const { handleSubmitOfRating, onClose } = props;
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setValue((inputs) => ({
      ...inputs,
      [key]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitOfRating( value,event); //props handle submit
    onClose();
  };

  return (
    <div>
      <Box align="center"component="fieldset" mb={3} borderColor="transparent">
        <form onSubmit={handleSubmit}>
          <Rating
            value={value.rating}
            name="rating"
            onChange={
              handleChange
            }
          />
          <TextareaAutosize
            name="review"
            aria-label="minimum height"
            rowsMin={5}
            placeholder="Enter Review"
            onChange={handleChange}
          />

          {/* <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button> */}
          <Button
          fullWidth
            type="submit" /* onClick={handleSubmitOfRating} */
            style={{ backgroundColor: "#171a29", marginTop: "12%",color:'white' }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}
