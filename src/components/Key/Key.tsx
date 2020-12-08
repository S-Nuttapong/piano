import React from "react";
import { NoteType } from "../../domain/note";
import clsx from "clsx";

interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onDown: () => void;
  onUp: () => void;
}

export const Key = ({ type, label, disabled, onDown, onUp }: KeyProps) => (
  <button
    className={clsx(`key key--${type}`)}
    type="button"
    disabled={disabled}
    onMouseDown={onDown}
    onMouseUp={onUp}
  >
    {label}
  </button>
);
