import { ChevronDown, Check } from 'lucide-react';

const FilterDropdown = ({ 
  isOpen, 
  onToggle, 
  selectedFilter, 
  onFilterChange, 
  filters 
}) => {
  
  const handleFilterSelect = (filter) => {
    onFilterChange(filter);
    onToggle(); // Close dropdown after selection
  };

  return (
    <div className="relative mb-8">
      {/* Filter Select Button */}
      <button
        onClick={onToggle}
        className="w-full glass rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/10"
      >
        <span className="text-gray-300 font-medium">{selectedFilter}</span>
        <div className="text-gray-400">
          <ChevronDown size={20} />
        </div>
      </button>

      {/* Dropdown Content - With website background layer */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50">
          {/* Background layer that matches website background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 glass rounded-2xl"></div>
          {/* Glass layer on top */}
          <div className="relative glass rounded-2xl p-2 shadow-2xl backdrop-blur-md border border-white/10">
            <div className="space-y-1">
              {filters.map((filter) => {
                const isSelected = selectedFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => handleFilterSelect(filter)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 text-left ${
                      isSelected 
                        ? 'gradient-bg text-white shadow-lg' 
                        : 'hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    <span className="font-medium">{filter}</span>
                    {isSelected && <Check size={16} />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Invisible backdrop to close dropdown when clicking outside */}
      {isOpen && (
        <div
          onClick={onToggle}
          className="fixed inset-0 z-40"
          style={{ background: 'transparent' }}
        />
      )}
    </div>
  );
};

export default FilterDropdown;