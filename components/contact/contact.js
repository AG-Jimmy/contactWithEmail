
import { useRef, useState, memo } from 'react';
const Contact = () => {
  const [loading, setLoading] = useState(true)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(e);
    setLoading(false)


    setLoading(true)
  }

  return (
    <center>

      <form ref={form} onSubmit={sendEmail}>
        <label >Name</label>
        <input style={{ display: "block" }} type="text" name="user_name" />
        <label>Email</label>
        <input style={{ display: "block" }} type="email" name="user_email" />
        <label>Message</label>
        <textarea style={{ display: "block", maxWidth: "145px", maxHeight: "145px" }} name="message" />
        <input type="submit" value={loading ? "Send" : "Sending"} />
      </form>
    </center>

  )
}
export default memo(Contact);