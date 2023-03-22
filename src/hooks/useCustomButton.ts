const useCustomButton = ({
  map,
  onClick,
  element,
  message,
}: {
  map: google.maps.Map;
  onClick: () => void;
  element: HTMLButtonElement;
  message: string;
}) => {
  element.style.backgroundColor = '#00b890';
  element.style.boxShadow =
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
  element.style.padding = '10px';
  element.style.margin = '10px';
  element.style.color = '#fff';
  element.style.fontSize = '16px';
  element.style.outline = 'none';
  element.style.borderRadius = '2px';
  element.style.fontFamily = 'NSRoundBold';
  element.style.transition = 'all 0.15s ease-in-out';

  element.textContent = message;
  element.type = 'button';
  element.addEventListener('click', () => {
    onClick();
  });
  element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '#00857A';
  });
  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = '#00b890';
  });

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(element);
};

export default useCustomButton;
