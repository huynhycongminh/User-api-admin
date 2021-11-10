import React, { Component } from "react";

export default class StorageAdmin extends Component {
  render() {
    return (
      <div className="content">
        <div className="heading mb-16">STORAGE MANAGER</div>
        <div className="box-content">
          <div className="sub-heading mb-16">LIST OF PRODUCTS</div>
          <div className="nav-menu-content mb-16">
            <ul className="list-menu">
              <li className="item-menu">
                <select className="filter-model mb-16">
                  <option value="All">All Model</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Suv">Suv</option>
                </select>
              </li>
              <li className="item-menu">
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                  Delete
                </a>
              </li>
              <li className="item-menu">
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-file-earmark-plus-fill"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z" />
                  </svg>
                  Add New
                </a>
              </li>
            </ul>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search Product"
                name="search-input"
                id="search-input"
                className="search-input"
              />
              <img
                src="./image/adminListofProduct/search.png"
                alt="Search button"
                className="search-btn"
              />
            </div>
          </div>
          {/* Filter Model */}

          <p className="user-manual">
            !Double click to view detail product information
          </p>
          {/* Table Model */}
          <table className="table table-striped table-model">
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" name id />
                </th>
                <th scope="col">ID</th>
                <th scope="col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-image-fill"
                    viewBox="0 0 20 20"
                  >
                    <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                  </svg>
                </th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name id />
                </td>
                <td>1</td>
                <td>
                  <img
                    src="./image/adminListofProduct/audi-a6-2021.jpg"
                    alt=""
                    className="car-img"
                  />
                </td>
                <td>Audi A6 2021</td>
                <td>1.500.000.000</td>
                <td>10</td>
                <td>
                  <button className="edit-button">
                    <img
                      src="./image/adminListofProduct/edit_pie_chart_report_48px.png"
                      alt="Edit img"
                      className="edit-img"
                    />
                  </button>
                </td>
                <td>
                  <button className="delete-button">
                    <img
                      src="./image/adminListofProduct/recycle_bin_48px.png"
                      alt="Delete img"
                      className="delete-img"
                    />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name id />
                </td>
                <td>2</td>
                <td>
                  <img
                    src="./image/adminListofProduct/audi-a6-2021.jpg"
                    alt=""
                    className="car-img"
                  />
                </td>
                <td>Audi A6 2021</td>
                <td>1.500.000.000</td>
                <td>10</td>
                <td>
                  <button className="edit-button">
                    <img
                      src="./image/adminListofProduct/edit_pie_chart_report_48px.png"
                      alt="Edit img"
                      className="edit-img"
                    />
                  </button>
                </td>
                <td>
                  <button className="delete-button">
                    <img
                      src="./image/adminListofProduct/recycle_bin_48px.png"
                      alt="Delete img"
                      className="delete-img"
                    />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name id />
                </td>
                <td>3</td>
                <td>
                  <img
                    src="./image/adminListofProduct/audi-a6-2021.jpg"
                    alt=""
                    className="car-img"
                  />
                </td>
                <td>Audi A6 2021</td>
                <td>1.500.000.000</td>
                <td>10</td>
                <td>
                  <button className="edit-button">
                    <img
                      src="./image/adminListofProduct/edit_pie_chart_report_48px.png"
                      alt="Edit img"
                      className="edit-img"
                    />
                  </button>
                </td>
                <td>
                  <button className="delete-button">
                    <img
                      src="./image/adminListofProduct/recycle_bin_48px.png"
                      alt="Delete img"
                      className="delete-img"
                    />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name id />
                </td>
                <td>4</td>
                <td>
                  <img
                    src="./image/adminListofProduct/audi-a6-2021.jpg"
                    alt=""
                    className="car-img"
                  />
                </td>
                <td>Audi A6 2021</td>
                <td>1.500.000.000</td>
                <td>10</td>
                <td>
                  <button className="edit-button">
                    <img
                      src="./image/adminListofProduct/edit_pie_chart_report_48px.png"
                      alt="Edit img"
                      className="edit-img"
                    />
                  </button>
                </td>
                <td>
                  <button className="delete-button">
                    <img
                      src="./image/adminListofProduct/recycle_bin_48px.png"
                      alt="Delete img"
                      className="delete-img"
                    />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name id />
                </td>
                <td>5</td>
                <td>
                  <img
                    src="./image/adminListofProduct/audi-a6-2021.jpg"
                    alt=""
                    className="car-img"
                  />
                </td>
                <td>Audi A6 2021</td>
                <td>1.500.000.000</td>
                <td>10</td>
                <td>
                  <button className="edit-button">
                    <img
                      src="./image/adminListofProduct/edit_pie_chart_report_48px.png"
                      alt="Edit img"
                      className="edit-img"
                    />
                  </button>
                </td>
                <td>
                  <button className="delete-button">
                    <img
                      src="./image/adminListofProduct/recycle_bin_48px.png"
                      alt="Delete img"
                      className="delete-img"
                    />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name id />
                </td>
                <td>6</td>
                <td>
                  <img
                    src="./image/adminListofProduct/audi-a6-2021.jpg"
                    alt=""
                    className="car-img"
                  />
                </td>
                <td>Audi A6 2021</td>
                <td>1.500.000.000</td>
                <td>10</td>
                <td>
                  <button className="edit-button">
                    <img
                      src="./image/adminListofProduct/edit_pie_chart_report_48px.png"
                      alt="Edit img"
                      className="edit-img"
                    />
                  </button>
                </td>
                <td>
                  <button className="delete-button">
                    <img
                      src="./image/adminListofProduct/recycle_bin_48px.png"
                      alt="Delete img"
                      className="delete-img"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
