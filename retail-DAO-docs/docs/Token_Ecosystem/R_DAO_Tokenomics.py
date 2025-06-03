import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import ConnectionPatch

# Make figure and assign axis objects
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9, 5))
fig.subplots_adjust(wspace=0)

# Set grey background for the figure
fig.set_facecolor('lightgrey')

# Add main title in upper left corner
fig.suptitle('$RETAIL Tokenomics', fontsize=16, fontweight='bold', x=0.05, y=0.95, ha='left')

# Donut chart parameters (overall token allocation)
overall_ratios = [0.65, 0.2175, 0.08, 0.045, 0.0075]
labels = ['DAO Community Treasury', 'Future Airdrops', 'First Main Airdrop', 'Contributors Team', 'Early Participants']
explode = [0, 0, 0, 0, 0]
# Rotate so that first wedge (DAO Treasury) is split by the x-axis
angle = -180 * overall_ratios[0]
wedges, texts, autotexts = ax1.pie(overall_ratios, autopct='%1.2f%%', startangle=angle,
                                   labels=labels, explode=explode, textprops={'fontsize': 10},
                                   wedgeprops={'width': 0.5, 'edgecolor': 'lightgrey'}, pctdistance=0.80)

# Add a white circle in the center to create the donut effect
center_circle = plt.Circle((0, 0), 0.5, color='lightgrey')
ax1.add_artist(center_circle)

# Add total supply text in the center of the donut chart
ax1.text(0, 0, 'Total Supply:\n1B tokens', ha='center', va='center', fontsize=10, fontweight='bold')

# Bar chart parameters (breakdown of 65% DAO Community Treasury)
treasury_ratios = [0.468, 0.044, 0.488]  # Proportions of 275M, 25.8M, 349.2M relative to 650M total
treasury_labels = ['Directly Unlocked (275M)', 'Multisig Wallet (25.8M)', 'Vested 3 Years (349.2M)']
bottom = 1
width = 0.2

# Adding from the top matches the legend
for j, (height, label) in enumerate(reversed([*zip(treasury_ratios, treasury_labels)])):
    bottom -= height
    bc = ax2.bar(0, height, width, bottom=bottom, color='C0', label=label,
                 alpha=0.1 + 0.25 * j)
    ax2.bar_label(bc, labels=[f"{height:.0%}"], label_type='center')

ax2.set_title('DAO Community Treasury Breakdown')
ax2.legend()
ax2.axis('off')
ax2.set_xlim(-2.5 * width, 2.5 * width)

# Use ConnectionPatch to draw lines between the two plots
theta1, theta2 = wedges[0].theta1, wedges[0].theta2
center, r = wedges[0].center, wedges[0].r
bar_height = sum(treasury_ratios)

# Draw top connecting line
x = r * np.cos(np.pi / 180 * theta2) + center[0]
y = r * np.sin(np.pi / 180 * theta2) + center[1]
con = ConnectionPatch(xyA=(-width / 2, bar_height), coordsA=ax2.transData,
                      xyB=(x, y), coordsB=ax1.transData)
con.set_color([0, 0, 0])
con.set_linewidth(1.5)
ax2.add_artist(con)

# Draw bottom connecting line
x = r * np.cos(np.pi / 180 * theta1) + center[0]
y = r * np.sin(np.pi / 180 * theta1) + center[1]
con = ConnectionPatch(xyA=(-width / 2, 0), coordsA=ax2.transData,
                      xyB=(x, y), coordsB=ax1.transData)
con.set_color([0, 0, 0])
con.set_linewidth(1.5)
ax2.add_artist(con)

# Save the plot as an image
plt.savefig('retail_tokenomics.png', dpi=150, bbox_inches='tight')
plt.close()