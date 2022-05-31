import React, { useState, useEffect } from "react";
import { fetchGames } from "../store/reducers/gameSlice";
import { getGames } from "../store/reducers/gameAPI";
import { useQuery } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";

const GetUsers = () => {
  const dispatch = useDispatch();
  const [games, setGames] = useState([]);
  // const { error, loading, data } = useQuery(getUsers);

  // const { loading, error, data } = useQuery(getGames);

  const loadData = async () => {
    await dispatch(fetchGames());
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
};

export default GetUsers;
