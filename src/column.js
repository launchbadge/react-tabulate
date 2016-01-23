import cx from "classnames";

export default class Column extends React.Component {
  render() {
    return (
      <th className={cx("table-header-cell table-cell", this.props.className)}>
        {this.props.children}
      </th>
    );
  }
}
