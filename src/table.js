import React from "react";
import cx from "classnames";
import TableRow from "./row";

export class Table extends React.Component {
  render() {
    const columns = Array.isArray(this.props.children)
      ? this.props.children : [this.props.children];

    const headers = columns.map((col, index) => {
      return React.cloneElement(col, {key: index});
    });

    const rows = this.props.items.map((item) => {
      return (
        <TableRow
          key={item.id}
          columns={columns} item={item}
          to={this.props.to ? this.props.to(item) : null}
        />
      );
    });

    return (
      <table className="table">
        <thead>
          <tr className="table-header-row table-row">
            {headers}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  items: React.PropTypes.array,
};

Table.defaultProps = {
  items: [],
};
