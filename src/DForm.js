import React from "react";
import './DForm.css';
function DForm() {
    return (
        <div className="Container">
            <form>
                <label>Im Looking For</label>
                <select>
                    <option>Select</option>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                </select> &nbsp;



                <label>Aged</label>&nbsp;
                <label for="age">From:</label>
                <input type="number" id="hour" min="1" max="100" />
                <label for="hour">To:</label>
                <input type="number" id="hour" min="1" max="100" />&nbsp;

                <label>of Religion</label>
                <select>
                <option>Select</option>
                    <option>Hindu</option>
                    <option>Muslim</option>
                    <option>Christian</option>
                    <option>Jain</option>
                    <option>Sikh</option>
                    <option>Buddist</option>
                </select>
                &nbsp;
                &nbsp;
                <label>and Mother tongue</label>
                <select>
                    <option>Select</option>
                    <option>Telugu</option>
                    <option>Hindi</option>
                    <option>English</option>
                    <option>Tamil</option>
                    <option>Malayalam</option>
                    <option>Kannada</option>
                </select>
&nbsp;
                <button>Let's Begin</button>
            </form>

        </div>

    )
}
export default DForm;