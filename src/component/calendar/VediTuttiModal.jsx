import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import './VediTuttiModal.css';

const VediTuttiModal = ({ open, onClose, events }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Eventi del {new Date().toLocaleDateString()}</DialogTitle>
      <DialogContent>
        <div className="event-list">
          {events.map((event, index) => (
            <div
              key={index}
              className={`event-item status-${event.status.toLowerCase()}`}
            >
              <div className="event-details">
                <h3>{event.clientName}</h3>
                <p>{event.activity}</p>
              </div>
              <div className="event-status">
                <span
                  className={`status-label ${event.status.toLowerCase()}`}
                >
                  {event.status}
                </span>
                <span className="event-duration">{event.duration}h</span>
                {event.avatar && (
                  <img
                    src={event.avatar}
                    alt="Avatar"
                    className="event-avatar"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VediTuttiModal;