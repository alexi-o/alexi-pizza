import Title from './Title';
import useInput from './useInput';
import getFirebase from '../firebase';
import {useState, useEffect} from 'react';
import moment from 'moment';

const firebase = getFirebase();

export default function MessageBoard(){
    const message = useInput("");
    const [messages, setMessages] = useState([]);

    useEffect(() =>{
      const fetchMessages = async () => {
        try {
          if (!firebase) return;
          const db = firebase.firestore();
          const ref = db.collection('messages');

          const docs = await ref.get();

          let allMessages = [];
          docs.forEach((doc) => {
            const data = doc.data();
            allMessages.push(data.message);
          });
          setMessages(allMessages);
        } catch (err) {
          console.log("error", err)
        }
      }

      fetchMessages();
    });

    const submitForm = async (e) => {
      e.preventDefault();
      if (firebase) {
        try {
          const db = firebase.firestore();
          const docRef = db.collection('messages').doc();
          const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
          await docRef.set(
            {
              message: message.value,
              timestamp: timestamp
            },
            { merge: true}
          );
          message.value = "";
        } catch (err) {
          alert(`An error occured: ${err}`);
          console.log("error", err);
        }
      }
    };



    return (
      <>
        <Title title="Message Board"/>
        <div className="message-board">
          <div className="messages">
            {
              messages.map((item, index) => {
                return <li className="message" key={index}>{item}</li>
              })
            }
          </div>
          <form className="message-submit" onSubmit={submitForm}>
            <title>Submit your message below</title>
            <input placeholder="Message" {...message} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    )
};