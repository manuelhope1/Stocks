import React from "react";
import { Table } from "react-bootstrap";

const StockTable = (props) => {
  return (
    <Table striped=" table-striped table-dark">
      <thead>
        <tr>
          <th>{props.info.name} </th>
          <th> $ {props.info.current_price}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Market Cap</td>
          <td> {props.info.market_cap} USD</td>
        </tr>
        <tr>
          <td>Market Cap Rank</td>
          <td>{props.info.market_cap_rank}</td>
        </tr>
        <tr>
          <td>Volume</td>
          <td>{props.info.total_volume} USD</td>
        </tr>
        <tr>
          <td>High (24hrs)</td>
          <td>{props.info.high_24h} USD</td>
        </tr>
        <tr>
          <td>Low (24hrs)</td>
          <td>{props.info.low_24h} USD</td>
        </tr>
        <tr>
          <td>Price Change % (24hrs)</td>
          <td>{props.info.price_change_percentage_24h.toFixed(2)} %</td>
        </tr>
        <tr>
          <td>Circulating Supply</td>
          <td>{props.info.circulating_supply} </td>
        </tr>
        <tr>
          <td>Total Supply</td>
          <td>{props.info.total_supply} </td>
        </tr>
        <tr>
          <td>All Time High</td>
          <td>{props.info.ath} USD </td>
        </tr>
        <tr>
          <td>All Time Low</td>
          <td>{props.info.atl} USD </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default StockTable;
