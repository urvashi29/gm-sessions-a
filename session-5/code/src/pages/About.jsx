import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // Multiple calls (without dependency)
  const fetchData = async () => {
    try {
      console.log("hello");
      const [users, posts] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
          res.json(),
        ),
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
          res.json(),
        ),
      ]);
      setData({ users, posts });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      console.log(data);
    }
  };

  // Multiple with dependency
  //   const fetchData = async () => {
  //     try {
  //       console.log("hello");
  //       const user = await fetch(
  //         "https://jsonplaceholder.typicode.com/users",
  //       ).then((res) => res.json());

  //       const post = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts",
  //       ).then((res) => res.json());

  //       setData({ user, post});
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //       console.log(data);
  //     }
  //   };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return <>Data has come</>;
};

export default About;

// Promise.all([new Promise(), myPromise, fetch(), axios.get()])
// Promise.race([]);
