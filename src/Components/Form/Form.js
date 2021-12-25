import React, { useState } from "react";
import formData from "../../Data/data";
import { useNavigate } from "react-router-dom";

function Form() {
  const [city, setCity] = useState("");
  let navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      choosen_city:
        event.target.elements.city.options[
          event.target.elements.city.selectedIndex
        ].text,
      choosen_school:
        event.target.elements.school.options[
          event.target.elements.school.selectedIndex
        ].text,
      choosen_room_name: event.target.elements.room_name.value,
      choosen_equipment_location:
        event.target.elements.equipment_location.value,
    };
    console.log("values", values);
    navigate("/SuccessPage", { state: { formValues: values } });
  };

  return (
    <div>
      <div>
        <h1>Equipment Installation Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="city">Choose a City:</label>
          <select
            required
            name="city"
            id="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            {formData.citys.map((form_city) => (
              <option value={form_city.id} name={form_city.name}>
                {form_city.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label for="school">Choose a School:</label>
          <select name="school" id="school">
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            {formData.schools.map((form_school) =>
              form_school.city_id.toString() === city ? (
                <option value={form_school.id} name={form_school.id}>
                  {form_school.school_name}
                </option>
              ) : (
                ""
              )
            )}
          </select>
        </div>
        <div>
          <label for="room_name">Room Name:</label>
          <textarea name="room_name" rows="3" cols="50"></textarea>
        </div>
        <div>
          <label for="equipment_location">Equipment Location:</label>
          <textarea name="equipment_location" rows="3" cols="50"></textarea>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Form;
