import { addUser, Users } from "../data/users";

type Props = {
  onCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  formFields: string[];
};


export default function Modal({ formFields, onCloseModal }: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputValues = Object.fromEntries(formData);

    const newUser:Omit<Users, "id" | "img" | "createdAt" | "verified">  = inputValues as Omit<Users, "id" | "img" | "createdAt" | "verified">;
    
    // usersDataTest.push((newUser as Users));
    // console.log(usersDataTest);

    // submit logic
    //.....
    addUser(newUser);

    // after submitting, close the modal
    onCloseModal(currentState => !currentState);

  }
  return (
    <div className="add">
      <div className="modal">
        <div className="close" onClick={() => onCloseModal}>
          &times;
        </div>
        <h1>Add new user</h1>
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div className="item">
              <label>{field}</label>
              <input
                name={field}
                id={field}
                placeholder={field}
                type={
                  field === "phone"
                    ? "tel"
                    : field === "email"
                    ? "email" : "text"
                }
              />
            </div>
          ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

