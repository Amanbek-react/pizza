import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../api/Api";
import css from "./CreateNewElement.module.css";

function CreateNewElement() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pizza");
  const [isSending, setSending] = useState(false);

  const navigate = useNavigate();

  console.log(status);

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    const data = {
      title,
      price,
      description,
      img: image,
    };
    Api.create(status, data)
      .finally(() => {
        setSending(false);
      })
      .then(() => {
        navigate("/admin");
      });
  };
  return (
    <div className="container page">
      <h1 className="text-center">Create new Element</h1>
      <form onSubmit={submit} className={css.formWrapper}>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Price"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="url"
          placeholder="Image Link"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        ></textarea>
        <label>
          <input
            name="status"
            value="pizza"
            checked={status === "pizza"}
            type="radio"
            onChange={(e) => setStatus(e.target.value)}
          />
          <span>Pizza</span>
        </label>
        <label>
          <input
            name="status"
            value="drinks"
            checked={status === "drinks"}
            type="radio"
            onChange={(e) => setStatus(e.target.value)}
          />
          <span>Drink</span>
        </label>
        <button disabled={isSending} className="btn">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateNewElement;
