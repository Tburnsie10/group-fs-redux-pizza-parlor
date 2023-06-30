import { DropdownItem } from 'reactstrap';

export default function CartDropdownItem({ item }) {
  return (
    <DropdownItem
      style={{ fontSize: '0.7rem' }}
      text
      className="d-flex justify-content-between"
    >
      {item.name} <span>{item.price}</span>
    </DropdownItem>
  );
}
