import { useState } from "react";
// utils
import { useNavigate } from "react-router-dom";
// components
import CircularProgress from "@mui/material/CircularProgress";
// css
import "./Screen.css";

const Screen = ({ data }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  return (
    <div className="screen">
      {data ? (
        <div class="card_wrapper">
          <div class="left">
            <div className="category">{data.category}</div>
            {loading && (
              <div className="photo-loading">
                <CircularProgress />
              </div>
            )}
            <img
              src={data.photoUrl}
              onLoad={() => {
                setLoading(false);
              }}
              class="img"
              alt="photographer"
            />
          </div>
          <div class="right">
            <div className="name">{data.name}</div>
            <div className={`${data.type}`}>{data.type}</div>
            <div className="aplid">
              APL10-{data.aplID.toString().padStart(4, "0")}
            </div>
            <div>
              <span className="college">College:</span> {data.college}
            </div>
          </div>
          <div className="go-back">
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Screen;
