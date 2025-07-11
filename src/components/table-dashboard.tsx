import book from "../assets/book.avif";

const TableDashboard = () => {
  return (
    <div>
      <table className="m-8">
        <tr className="border-b border-gray-300 shadow">
          <th>Cover Picture</th>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Description</th>
        </tr>
        <tr className="">
          <td>
            <img src={book} alt="book-cover" className="w-[50px] h-[50px] rounded-lg my-2" />
          </td>
          <td className="">Dammy Book</td>
          <td className="">MR.Author</td>
          <td>200USD</td>
          <td>10</td>
          <td>Enjoyable dummy book</td>
        </tr>
        <tr>
          <td>
            <img src={book} alt="book-cover" className="w-[50px] h-[50px] rounded-lg my-2" />
          </td>
          <td>Dammy Book</td>
          <td>MR.Author</td>
          <td>200USD</td>
          <td>10</td>
          <td>Enjoyable dummy book</td>
        </tr>
        <tr>
          <td>
            <img src={book} alt="book-cover" className="w-[50px] h-[50px] rounded-lg my-2" />
          </td>
          <td>Dammy Book</td>
          <td>MR.Author</td>
          <td>200USD</td>
          <td>10</td>
          <td>Enjoyable dummy book</td>
        </tr>
      </table>
    </div>
  );
};

export default TableDashboard;
