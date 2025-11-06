export default function NavItem({ icon, label, className }) {
  return (
    <div className={` flex items-center gap-2 px-2 py-3 rounded-xl text-gray-700  cursor-pointer transition-all duration-200 ${className} `}>
      {/* <span className="text-lg">{icon}</span> */}
      <img src={icon} className="w-8" alt={label} />
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}

