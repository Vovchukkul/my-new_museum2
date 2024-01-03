/* eslint-disable react/react-in-jsx-scope */
import './ButtonSubscribe.scss';

export const ButtonSubscribe = (
  {
    text, color, textColor, borderColor,
  }: {
    text: string,
    color: string,
    textColor: string,
    borderColor: string,
  },
) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <button
      className="btn_sub"
      style={
        {
          backgroundColor: color,
          border: `1px solid ${borderColor}`,
          color: textColor,
        }
      }
      type="button"
    >
      <span className="btn__sub-span">
        {text}
      </span>
    </button>
  );
};
