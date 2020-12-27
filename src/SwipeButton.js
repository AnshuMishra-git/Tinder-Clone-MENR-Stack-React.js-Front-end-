import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CancelIcon from "@material-ui/icons/Cancel";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

export default function SwipeButton() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_left">
        <CancelIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
