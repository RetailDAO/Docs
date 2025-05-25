import matplotlib.pyplot as plt

# Define the labels and sizes for the donut chart
labels = [
    'DAO Treasury (65%)',
    'DAO Rewards (21.75%)',
    'DAO Staking (8%)',
    'DAO Team (4.5%)',
    'DAO Early Participants (0.75%)'
]
sizes = [65, 21.75, 8, 4.5, 0.75]
colors = ["#0b5c96", '#ff7f0e', "#268d26", "#c91818", "#7e56a3"]
explode = (0, 0, 0, 0, 0)  # No explosion for a clean look

# Create donut chart
plt.figure(figsize=(8, 6))
wedges, texts, autotexts = plt.pie(
    sizes,
    explode=explode,
    labels=labels,
    colors=colors,
    autopct='%1.1f%%',
    shadow=False,
    startangle=90,
    wedgeprops={'width': 0.5, 'edgecolor': 'white', 'linewidth': 1},  # Donut hole and rounded edges
    textprops={'fontsize': 12},  # Font size for labels
    pctdistance=0.7,  # Move percentage labels closer to avoid overlap
    labeldistance=1.1  # Adjust label distance to prevent crowding
)


# Adjust the size of the percentage labels
for autotext in autotexts:
    autotext.set_color('white')  # Set percentage text color to white
    autotext.set_fontsize(10)  # Set font size for percentage text
# Adjust the size of the labels
for text in texts:
    text.set_fontsize(12)  # Set font size for labels
    text.set_color('black')  # Set label text color to black
# Set the aspect ratio to be equal for a circular pie chart
plt.gca().set_aspect('equal')

# Title in top-left
plt.title('$RETAIL Tokenomics Distribution', fontsize=18, weight='bold', loc='left', pad=5)

# Ensure circular shape
plt.axis('equal')

# Save the plot as an image
plt.savefig('retail_tokenomics.png', dpi=150, bbox_inches='tight')
plt.close()