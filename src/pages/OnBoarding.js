import Nav from '../components/Nav'
import {useState} from 'react'



const OnBoarding = () => {

    const [formData, setFormData] = useState({
        user_id: " ",
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: "man",
        gender_interest: "woman",
        url: "",
        about: "",
        matches: []

    })

    //let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            //   const response = await axios.put('http://localhost:8000/user', {formData})
            //   console.log(response)
            //   const success = response.status === 200
            //    if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }

    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name
        console.log('value' + value,'name' + name)

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    console.log(formData)

    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
            />

            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type='text'
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />

                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />

                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_identity === "man"}
                            />
                            <label htmlFor="man-gender-identity">Man</label>
                            <input
                                id="woman-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_identity === "woman"}
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>
                            <input
                                id="more-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="more"
                                onChange={handleChange}
                                checked={formData.gender_identity === "more"}
                            />
                            <label htmlFor="more-gender-identity">More</label>
                        </div>

                        <label htmlFor="show-gender">Show Gender on my Profile</label>

                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />

                        <label>Show Me</label>

                        <div className="multiple-input-container">
                            <input
                                id="man-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_interest === "man"}
                            />
                            <label htmlFor="man-gender-interest">Man</label>
                            <input
                                id="woman-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_interest === "woman"}
                            />
                            <label htmlFor="woman-gender-interest">Woman</label>
                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gender_interest === "everyone"}
                            />
                            <label htmlFor="everyone-gender-interest">Everyone</label>

                        </div>


                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="In corporate these 4 random words: Banana, pickel, oven mit, verasity "
                            value={formData.about}
                            onChange={handleChange}
                        />

                        <input type="submit"/>

                    </section>
                    <section>

                        <label htmlFor="url">Profile Photo</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile pic preview"/>}
                        </div>




                        <label htmlFor="url2">Hydrated Photo</label>
                        <input
                            type="url2"
                            name="url2"
                            id="url2"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url2 && <img src={formData.url2} alt="profile pic preview"/>}
                        </div>

                        <label htmlFor="url3">Parents Photo</label>
                        <input
                            type="url3"
                            name="url3"
                            id="url3"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url3 && <img src={formData.url3} alt="profile pic preview"/>}
                        </div>


                        <label htmlFor="url4">Down Bad Photo</label>
                        <input
                            type="url4"
                            name="url4"
                            id="url4"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url3 && <img src={formData.url3} alt="profile pic preview"/>}
                        </div>

                        <div className="photo-container">
                            {formData.url4 && <img src={formData.url4} alt="profile pic preview"/>}
                        </div>


                        <label htmlFor="url5">Sleeping Photo</label>
                        <input
                            type="url5"
                            name="url5"
                            id="url5"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url5 && <img src={formData.url5} alt="profile pic preview"/>}
                        </div>

                    </section>


                </form>

            </div>
        </>
    )
}
export default OnBoarding