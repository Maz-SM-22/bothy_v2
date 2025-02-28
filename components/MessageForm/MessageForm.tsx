import { useState } from 'react'
import styles from './MessageForm.module.css'

export const MessageForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault()
        setMessage(event.target.value)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()

        const response = await fetch('https://formsubmit.co/42fe0094aea430d4fb97a40182d68581', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, message}),
        });

        const data = await response.json();
    }

    return (
        <form className={styles.form} action="https://formsubmit.co/42fe0094aea430d4fb97a40182d68581" method="POST" >
            <input
                type="text"
                name="name"
                className={styles.input}
                placeholder="Name..."
                onChange={(e) => handleNameInput(e)}
            />
            <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="Email..."
                onChange={(e) => handleEmailInput(e)}
            />
            <textarea
                name="message"
                className={styles.textarea}
                placeholder="Tell us about yourself or your idea..."
                onChange={(e) => handleTextareaChange(e)}
            />
            <button
                className={styles.button}
                type="submit"
                onSubmit={(e) => handleSubmit(e)}
            >
                Send
            </button>
        </form>
    )
}