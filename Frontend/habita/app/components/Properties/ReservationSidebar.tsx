
const ReservationSidebar = () => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-100 shadow-2xl">

<h2 className="mb-5 text-2xl ">N350k per night</h2>

<div className="mb-6 p-3 border-gray-400 rounded-xl">
<label className=" mb-2 block font-bold text-xs">
  Guests
</label>
<select className="w-full -ml-l text-xm">
 <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
</select>


</div>

<div className="w-full mb-6 py-6 text-center text-white bg-habita hover:bg-blue-600 rounded-2xl">Book</div>


<div className="mb-4 flex justify-between align-center">

  <p>N350k * 4 nights</p>
  <p>N800k</p>
</div>


<div className="mb-4 flex justify-between align-center">

  <p>Habita Fee</p>
  <p>N20k</p>
</div>
<hr/>

<div className="mt-4 flex justify-between align-center font-bold">

  <p>Total</p>
  <p>N820k</p>
</div>
    </aside>
  )
}

export default ReservationSidebar
