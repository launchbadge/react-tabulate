import cx from "classnames";

export default class TableRow extends React.Component {
  render() {
    const item = this.props.item;
    const cells = this.props.columns.map((col, index) => {
      return (
        <td
          key={`${item.id}.${index}`}
          className={cx("table-cell", "table-body-cell", col.props.className)}
        >
          {col.props.component(item)}
        </td>
      );
    });

    return (
      <tr className="table-row table-body-row">
        {cells}
      </tr>
    );
  }
}
