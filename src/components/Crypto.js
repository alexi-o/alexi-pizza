import Title from './Title';
import React, {useState} from "react"; 
import { gql, useQuery, useMutation } from "@apollo/client"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
// import { Link } from "react-router-dom"
// import { Formik, Field, Form } from "formik"

const TRENDING_COINS = gql`
  query Coins {
    coins @rest(type: "Coins", path: "search/trending", endpoint: "trending") {
        coins {
            item {
                id
                coin_id
                name
                symbol
                market_cap_rank
                thumb
                price_btc
            }
        }
    }
  }
`;


// function TopCoinsList() {
//     const { loading, error, data } = useQuery(query);

//     if (loading) return <p>Loading Top Coins...</p>

//     if (error) return <p>Error Loading Coins!</p>
//     console.log(data.coins.coins)
//     return data.coins.coins.map((coin) => (
//         <CoinItem 
//             key={coin.item.id}
//             coin={{...coin}}
//         />
//     ));
// }

function btcToUsd (valueBtc) {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice/usd.json')
        .then(res => {
            console.log(res.data.bpi.USD.rate_float)
            let btcPrice = res.data.bpi.USD.rate_float
            console.log(valueBtc * btcPrice)
            return (valueBtc * btcPrice)
        });
}

function CoinItem({coin}) {
	const { id, coin_id, name, symbol, market_cap_rank, thumb, price_btc } = coin.item
  return (
    <TableRow
        key={name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">
        {name}
        </TableCell>
        <TableCell align="right">{symbol} <img src={thumb} alt={symbol}/></TableCell>
        <TableCell align="right">{market_cap_rank}</TableCell>
        <TableCell align="right">{btcToUsd(price_btc)}</TableCell>
    </TableRow>
  );
}

function CoinTable() {
    const { loading, error, data } = useQuery(TRENDING_COINS);

    if (loading) return <p>Loading Top Coins...</p>

    if (error) return <p>Error Loading Coins!</p>

    return (
        <TableContainer component={Paper} className="crypto-table">
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Symbol</TableCell>
                    <TableCell align="right">Market Cap Rank</TableCell>
                    <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.coins.coins.map((coin) => (
                        <CoinItem 
                            key={coin.item.id}
                            coin={{...coin}}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default function Crypto() {
    return (
        <>
            <Title title="Crypto" className="crypto-page"/>
            <div>
                <p>I recently wanted to try out using the Apollo Client for writing GraphQL queries to an API so this page digests the 
                    CoinGecko API to return information about user-searched cryptos.
                </p>
            </div>
            <div>
                {<CoinTable />}
            </div>
        </>
    )
};