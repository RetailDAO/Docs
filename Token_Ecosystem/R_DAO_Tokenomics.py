import matplotlib.pyplot as plt

# Tokenomics data
labels = [
    'DAO Community Treasury',
    'Future Airdrops (Multisig)',
    'First Main Airdrop',
    'Contributors Team',
    'Early Participants'
]
sizes = [65, 21.75, 8, 4.5, 0.75]
colors = ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0']
explode = (0.1, 0, 0, 0, 0)  # Emphasize DAO Community Treasury

# Create pie chart
plt.figure(figsize=(10, 7))
plt.pie(sizes, explode=explode, labels=labels, colors=colors,
        autopct='%1.1f%%', shadow=True, startangle=90)
plt.title('$RETAIL Tokenomics Distribution', fontsize=16)
plt.axis('equal')  # Equal aspect ratio ensures pie is circular

# Save the plot as an image
plt.savefig('assets/retail_tokenomics.png', dpi=300, bbox_inches='tight')
plt.close()