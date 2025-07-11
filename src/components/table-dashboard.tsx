import book from "../assets/book.avif";

const TableDashboard = () => {
  return (
    <div>
      <table className="table-auto m-8 border-separate border-spacing-x-4 border-spacing-y-2">
        <tr className="border-b border-gray-300 shadow">
          <th>Cover Picture</th>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Description</th>
          <th>Availability</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
        <tr>
          <td>
            <img src={book} alt="book-cover" className="w-[50px] h-[50px] rounded-lg" />
          </td>
          <td className="">Dammy Book</td>
          <td className="">MR.Author </td>
          <td>200USD</td>
          <td>10 Copies</td>
          <td>Enjoyable dummy book</td>
          <td><button className="bg-amber-500 rounded-lg text-white p-1 w-[80px]">Available</button></td>
          <td>Science</td>
          <td>2004</td>
        </tr>
        <tr>
          <td>
            <img src={book} alt="book-cover" className="w-[50px] h-[50px] rounded-lg" />
          </td>
          <td>Dammy Book</td>
          <td>MR.Author</td>
          <td>200USD</td>
          <td>10 Copies</td>
          <td>Enjoyable dummy book</td>
          <td><button className="bg-amber-500 rounded-lg text-white p-1 w-[80px]">Available</button></td>
          <td>Science</td>
          <td>2004</td>
        </tr>
        <tr>
          <td>
            <img src={book} alt="book-cover" className="w-[50px] h-[50px] rounded-lg" />
          </td>
          <td>Dammy Book</td>
          <td>MR.Author</td>
          <td>200USD</td>
          <td>10 Copies</td>
          <td>Enjoyable dummy book</td>
          <td><button className="bg-red-500 rounded-lg text-white p-1 w-[80px]">Sold</button></td>
          <td>Science</td>
          <td>2004</td>
        </tr>
        <tr>
          <td>
            <img src={book} alt="book-cover" className="w-[50px] h-[50px] rounded-lg" />
          </td>
          <td>Dammy Book</td>
          <td>MR.Author</td>
          <td>200USD</td>
          <td>10 Copies</td>
          <td>Enjoyable dummy book</td>
          <td><button className="bg-amber-500 rounded-lg text-white p-1 w-[80px]">Available</button></td>
          <td>Science</td>
          <td>2004</td>
        </tr>
        <tr>
          <td>
            <img src={book} alt="book-cover" className="w-[50px] h-[50px] rounded-lg" />
          </td>
          <td>Dammy Book</td>
          <td>MR.Author</td>
          <td>200USD</td>
          <td>10 Copies</td>
          <td>Enjoyable dummy book</td>
          <td><button className="bg-red-500 rounded-lg text-white p-1 w-[80px]">Sold</button></td>
          <td>Science</td>
          <td>2004</td>
        </tr>
      </table>
    </div>
  );
};

export default TableDashboard;
