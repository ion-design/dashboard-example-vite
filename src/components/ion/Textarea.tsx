// Generated with Ion on 11/7/2024, 3:42:37 PM
// Figma Link: https://www.figma.com/design/GzGS1XBtO8fnXGsjKDPiIf?node-id=2:8763
// ion/Textarea: Generated with Ion on 11/7/2024, 3:42:37 PM
import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import Hint from "./Hint";
import Label from "./Label";

/* ---------------------------------- Type --------------------------------- */

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Display the maximum length of the textarea in the bottom right corner, has to include the `maxLength` property to work
   * @default false
   */
  showCount?: boolean;
  /** Label of the input */
  label?: string;
  /** Helper text, to the right of the label */
  helper?: string;
  /** Hint/description below the datepicker */
  hint?: string;
  /** Display hint icon to the left of the hinti
   * @default false
   */
  showHintIcon?: boolean;
  /** Display required mark to the right of the label */
  required?: boolean;
  /** Display the input with an error state */
  error?: boolean | string;
  /** Classname of the container (use this to position the textarea) */
  className?: string;
  /** Classname of the textarea (use this to restyle the textarea) */
  textareaClassName?: string;
}

/* ---------------------------------- Component --------------------------------- */

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      required,
      label,
      helper,
      hint,
      showHintIcon = false,
      error,
      showCount,
      className,
      textareaClassName,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const id = props.id || generatedId;
    const [charCount, setCharCount] = useState(0);

    return (
      <div className={className}>
        {label && (
          <Label
            htmlFor={id}
            disabled={props.disabled}
            required={required}
            helper={helper}
            className="mb-1"
          >
            {label}
          </Label>
        )}
        <div className="relative">
          <textarea
            maxLength={props.maxLength}
            ref={ref}
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }
              setCharCount(e.target.value.length);
            }}
            className={twMerge(
              clsx(
                "focus-visible:primary-focus flex w-full rounded-radius border hover:border-outline bg-transparent p-3 text-sm text-foreground transition-all placeholder:text-subtle",
                "disabled:pointer-events-none disabled:border-stroke-disabled disabled:bg-disabled disabled:text-on-disabled disabled:placeholder:text-on-disabled",
                {
                  "focus-visible:danger-focus border-danger": error,
                  "border-stroke focus-visible:border-stroke-primary": !error,
                },
                textareaClassName
              )
            )}
            {...props}
            id={id}
          />
          {showCount && (
            <span
              className={clsx(
                "absolute bottom-3 right-4 text-xs font-normal text-secondary",
                {
                  "text-on-disabled": props.disabled,
                  "!text-danger": error,
                }
              )}
            >
              {charCount} / {props.maxLength}
            </span>
          )}
        </div>
        {hint && (
          <Hint
            error={error}
            className="mt-1"
            showIcon={showHintIcon}
            disabled={props.disabled}
          >
            {hint}
          </Hint>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export default Textarea;
