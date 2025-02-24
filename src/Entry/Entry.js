import { useState } from "react";
// utils
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// components
import { CircularProgress } from "@mui/material";
// css
import "./Entry.css";
import "react-toastify/dist/ReactToastify.css";

const Entry = ({ data, setData }) => {
  const navigate = useNavigate();
  const [aplID, setAplID] = useState();
  const [loading, setLoading] = useState(false);
  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`https://acharyahabba-backend.onrender.com/apl/get-player`, { aplID })
      .then((response) => {
        setData(response.data.data, navigate("/screen"));
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };
  return (
    <div className="entry">
      <div className="container">
        <img src="/images/apl-logo.png" alt="" />
        <h2 className="heading">Acharya Premier League Season - 10</h2>
        <div className="inner-container">
          <h3>Enter APL ID</h3>
          <form onSubmit={onFormSubmit}>
            <div className="input">
              <span>APL10</span>
              <span>-</span>
              <input
                type="text"
                required
                value={aplID}
                placeholder="APL ID"
                onChange={(e) => setAplID(e.target.value)}
              />
            </div>
            {loading ? (
              <span className="loading-search">
                <CircularProgress />
              </span>
            ) : (
              <button type="submit">Search</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Entry;
