export default function Contact({contact,setContact}){

    function handleSubmit(e){
        e.preventDefault();
        setContact(contact)
        // e.target.reset();
    };
    function handleChange(e){
        setContact({
            ...contact,
            [e.target.name] : e.target.value
        })
    }
    return (
        <>
      <form onSubmit={handleSubmit}>
    <fieldset>
        <legend>Contact Information</legend>

        <label htmlFor="firstName">First Name:</label>
        <input 
            type="text" 
            id="firstName" 
            name="FirstName" 
            value={contact.FirstName} 
            onChange={handleChange} 
        />

        <label htmlFor="lastName">Last Name:</label>
        <input 
            type="text" 
            id="lastName" 
            name="LastName" 
            value={contact.LastName} 
            onChange={handleChange} 
        />

        <label htmlFor="email">Email:</label>
        <input 
            type="email" 
            id="email" 
            name="Email" 
            value={contact.Email} 
            onChange={handleChange} 
        />

        <label htmlFor="phoneNumber">Phone No.:</label>
        <input 
            type="tel" 
            id="phoneNumber" 
            name="PhoneNumber" 
            value={contact.PhoneNumber} 
            onChange={handleChange} 
        />

        <label htmlFor="city">City:</label>
        <input 
            type="text" 
            id="city" 
            name="City" 
            value={contact.City} 
            onChange={handleChange} 
        />

        <label htmlFor="country">Country:</label>
        <input 
            type="text" 
            id="country" 
            name="Country" 
            value={contact.Country} 
            onChange={handleChange} 
        />

        <label htmlFor="postalCode">Postal Code:</label>
        <input 
            type="text" 
            id="postalCode" 
            name="PostalCode" 
            value={contact.PostalCode} 
            onChange={handleChange} 
        />
    </fieldset>

    <button type="submit">Save</button>
</form>


        </>
        
    )
}